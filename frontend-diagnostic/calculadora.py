from tkinter import Button, Tk, Frame,Entry,END

ventana = Tk()
ventana.geometry('274x328')
ventana.config(bg= "white")
ventana.iconbitmap(bitmap='isft_logo.ico')
ventana.resizable(0,0)
ventana.title('Calculadora IFST')

i=0
def get_number(data):
	global i
	i+=1
	results.insert(i, data)
	
def operation():
	global i

	equation = results.get()
	
	if i !=0:		
		
		try:
			result = str(eval(equation))
			results.delete(0,END)
			results.insert(0,result)
			longitud = len(result)
			i = longitud
   

		except:
			result = 'ERROR'
			results.delete(0,END)
			results.insert(0,result)
	else:
		pass

def delete_one():
	global i 
	if i==-1:
		pass
	else:
		results.delete(i,last =None)
		i-=1
		
def delete_all():
	results.delete(0, END)	
	i=0

frame = Frame(ventana)
frame.grid(column=0, row=0, padx=6, pady=3)

results = Entry(frame, width=20, relief='groove', font = 'Arial 16',justif = 'right')
results.grid(columnspan=4 , row=0, pady=3,padx=1, ipadx=1, ipady=1) 

Button1 = Button(frame, text= "1", borderwidth=2, height=2, width=5, font= ('Arial',12,'bold'),relief = "raised", bg = '#2A16F7',  anchor="center", command=lambda: get_number(1))  
Button1.grid( column= 0 ,row=1, pady=1,padx=3)

Button2 = Button(frame, text= "2", height=2, width=5, font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7', anchor="center",command=lambda: get_number(2))  
Button2.grid(column =1 , row=1, pady=1,padx=1)

Button3 = Button(frame, text= "3", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg ='#2A16F7', anchor="center",command=lambda: get_number(3))  
Button3.grid(column =2, row=1, pady=1,padx=1)

Button_back = Button(frame, text= "⌫", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg='#FD0371',  anchor="center",command=lambda: delete_one())  
Button_back.grid(column =3, row=1, pady=2,padx=2)


Button4 = Button(frame, text= "4",height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg ='#2A16F7', anchor="center",command=lambda: get_number(4)) 
Button4.grid( column= 0 ,row=2, pady=1,padx=1)

Button5 = Button(frame, text= "5", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7', anchor="center",command=lambda: get_number(5))  
Button5.grid(column =1 , row=2, pady=1,padx=1)

Button6 = Button(frame, text= "6", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7',  anchor="center",command=lambda: get_number(6))  
Button6.grid(column =2, row=2, pady=1,padx=1)

Button_more = Button(frame, text= "+", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg='#2FEC71',  anchor="center",command=lambda: get_number('+'))  
Button_more.grid(column =3, row=2, pady=2,padx=2)

Button7 = Button(frame, text= "7",height=2, width=5, font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7',  anchor="center",command=lambda: get_number(7))  
Button7.grid( column= 0 ,row=3, pady=1,padx=1)

Button8 = Button(frame, text= "8", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7', anchor="center",command=lambda: get_number(8))  
Button8.grid(column =1 , row=3, pady=1,padx=1)

Button9 = Button(frame, text= "9", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7',  anchor="center",command=lambda: get_number(9))  
Button9.grid(column =2, row=3, pady=1,padx=1)

Button_less = Button(frame, text= "-", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg='#2FEC71',  anchor="center",command=lambda: get_number('-'))  
Button_less.grid(column =3, row=3, pady=2,padx=2)


Button0 = Button(frame, text= "0",height=5, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7',  anchor="center",command=lambda: get_number(0))  
Button0.grid( column= 0,row=4, rowspan=2,  pady=1,padx=1)

Button_dot = Button(frame, text= ".", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2A16F7', anchor="center",command=lambda: get_number('.'))  
Button_dot.grid(column =1 , row=4, pady=1,padx=1)

Button_entry = Button(frame, text= "÷", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised",bg ='#2FEC71',  anchor="center",command=lambda: get_number('/'))  
Button_entry.grid(column =2, row=4, pady=1,padx=1)

Button_x = Button(frame, text= "x", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg='#2FEC71',  anchor="center",command=lambda: get_number('*'))  
Button_x.grid(column =3, row=4, pady=2,padx=2)

Button_equal = Button(frame, text= "=", height=2, width=12,font= ('Arial',12,'bold'), borderwidth=2,  relief = "raised", bg ='#FD5603', anchor="center",command=lambda: operation())  
Button_equal.grid(column =1 ,columnspan=2, row=5, pady=1,padx=1)

Button_delete = Button(frame, text= "C", height=2, width=5,font= ('Arial',12,'bold'), borderwidth=2, relief = "raised", bg='#FD0371', anchor="center",command=lambda: delete_all())  
Button_delete.grid(column =3, row=5, pady=2,padx=2)

ventana.mainloop()
