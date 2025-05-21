import cv2 as cv
import os

import numpy as np

nx, ny = 1920, 2560
mask = np.array([
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0]
])

#for file in os.listdir("inputs"):
for file in ["wearable_thumbnail.jpg"]:
    img = cv.imread(f"inputs/{file}")
    # print(file, img.shape)

    scale = max([nx / img.shape[0], ny / img.shape[1]])
    img = cv.resize(img, None, fx=scale, fy=scale)

    x_, y_ = img.shape[:-1]
    # img = img[x_ // 2 - nx // 2:x_ // 2 + nx // 2, y_ // 2 - ny // 2:y_ // 2 + ny // 2, :]
    img = img[x_ // 2 - nx // 2 - 300:x_ // 2 + nx // 2 - 300, y_ // 2 - ny // 2:y_ // 2 + ny // 2, :]

    img = cv.filter2D(img, 0, mask)

    # print(img.shape)
    cv.imwrite(f"{file[:file.index('.')]}.png", img)
