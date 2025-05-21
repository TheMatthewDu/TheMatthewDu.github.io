import cv2
import imageio

def mp4_to_slow_gif(input_path, output_path, slow_factor=4096.0):
    """
    Converts an MP4 video to a GIF slowed down by 'slow_factor'.
    """
    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        raise IOError(f"Cannot open video file {input_path}")

    fps = cap.get(cv2.CAP_PROP_FPS)
    duration = slow_factor / fps

    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        # Convert from BGR (OpenCV default) to RGB (ImageIO/Pillow requirement)
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        frames.append(rgb)

    cap.release()
    imageio.mimsave(output_path, frames, duration=duration)

if __name__ == "__main__":
    mp4_to_slow_gif("output_video_cropped.mp4", "video_output.gif")
    print(f"Created slowed GIF 'video_output.gif'")
