import cv2 as cv
import numpy as np

file = "MusicBanner.png"
img = cv.imread(file)

img = cv.resize(img, None, fx=2, fy=2)
blur = cv.GaussianBlur(img, (3, 3), 0)

img = cv.addWeighted(img, 10, blur, -9, 1, blur)

cv.imshow("img", img)
cv.waitKey()

cv.imwrite("MusicBanner_new.png", img)

