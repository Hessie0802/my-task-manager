lijst = ["Grass Mowing" , "Shopping", "Study"]
def menu ():
    print('Welcome to your task manager, Please Press:')
    print('1. to see all your tasks')
    print('2. to add a task')
    print('3. to delete a task')
    print('4. to mark a task as done')
    print('5. to Exit the task manager')

    cijfer = input('What is your choice?')
    
    
  
    
    if cijfer == "1":
        for element in lijst:
            print ("- ", element)
            
              
    if cijfer == "2":
    
        taak = input('What do you want to add?')
        lijst.append(taak) 

        for element in lijst:
            print("-" , element)
    

    if cijfer == "3":
        
        taak = input('Which task do you want to delete?')
        
        for i in lijst:
            if i == taak:
                lijst.remove(taak)
            
        for element in lijst:
            print("-" , element)
        
       
    if cijfer == "4":
        taak = input('Which task do you want to Mark als Done?')
        
        for i in lijst:
            if i == taak:
                place = lijst.index(i)
                lijst[place] = str(taak + ' -Completed')
                
        for element in lijst:
            print("-" , element)
            
        
    if cijfer == "5":
        print("You quit the Task Manager")
        return True
    
    
             
while True:              # Jump out of the loop
    stoppen = menu()
    if stoppen == True:
        break
