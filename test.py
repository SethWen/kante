"""  
    author: Shawn
    time  : 18-9-25 下午6:10
    desc  :
    update: Shawn 18-9-25 下午6:10      
"""

import numpy as np
import cv2

img = cv2.imread('/home/shawn/Pictures/jd_test1.png')
cv2.imshow('image', img)
print('0000000000000000000000')
k = cv2.waitKey(0)
# if k == 27:  # wait for ESC key to exit
#     print('1111111111111111')
#     cv2.destroyAllWindows()
# elif k == ord('s'):  # wait for 's' key to save and exit
#     print('222222222222222')
#     cv2.imwrite('messigray.png', img)
#     cv2.destroyAllWindows()
