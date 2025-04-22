from tkinter import *


def click_btn () :
    text = e1.get()
    l2.config(text=text)

root = Tk()
root.geometry("200x200")
l1 = Label(root, text="وظایف").pack()
e1 = Entry(root, width=20)
e1.pack()
b1 = Button(root, text="click", command=click_btn)
b1.pack()
l2 = Label(root, text="")
l2.pack()
root.mainloop()
