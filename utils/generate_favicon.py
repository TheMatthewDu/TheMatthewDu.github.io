import cv2
import numpy as np

# Create a 16x16 RGBA image with a transparent background
img_size = 64
img = np.zeros((img_size, img_size), dtype=np.uint8)

# Text settings
text = "MD"
font = cv2.FONT_HERSHEY_SIMPLEX
font_scale = 1  # Adjusted to fit
font_thickness = 3  # Bold

# Get the size of the text box
(text_width, text_height), baseline = cv2.getTextSize(text, font, font_scale, font_thickness)

while text_width != img_size:
    font_scale = font_scale + 0.01 * (img_size - text_width)
    # Get the size of the text box
    (text_width, text_height), baseline = cv2.getTextSize(text, font, font_scale, font_thickness)


# Calculate coordinates for centering the text
x = (img_size - text_width) // 2
y = (img_size + text_height) // 2

# Create a temporary BGR image to render the text
img = cv2.putText(img, text, (x, y), font, font_scale, 255, font_thickness, cv2.LINE_AA)

img[img <= 250] = 0

# Convert to alpha mask where the text is white
a = img
r = img
g = img
b = img

# Merge text and alpha channel
img = np.dstack((r, g, b, a))

# Save the result
cv2.imwrite('md_16x16.png', img)
