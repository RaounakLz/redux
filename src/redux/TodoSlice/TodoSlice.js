import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist:[
        {
        id: 1,
        title: "Ferrero Rocher ",
        description:" la marque d'une confiserie italienne. Elle se compose d'une noisette et de chocolat fondant dans une coque de gaufrette enrobée de chocolat au lait aux éclats de noisette, le tout emballé dans un papier aluminium doré puis conditionné en boîtes de plastique transparent",
        isDone: false,
      },
      {
        id: 2,
        title: "Raffaello",
        description:"une marque italienne de confiserie fabriquée par le groupe Ferrero depuis 1990. Cette confiserie est constituée d'une amande, d'une crème au chocolat blanc et d'une gaufrette, le tout recouvert de noix de coco.",
        isDone: false,
      },
      {
        id: 3,
        title: "Kinder",
        description:"une marque italienne de confiserie fabriquée par le groupe Ferrero C'est son cœur au lait si doux, recouvert du bon chocolat KINDER, qui satisfait la gourmandise des enfants, dans des portions de petite taille adaptées aux souhaits des parents. Il se présente en portions emballées individuellement pour plus de praticité.",
        isDone: true,
      },
      ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    addTask: (state, action) => {
     state.todolist.push(action.payload)
     console.log(action);
    },
    removeTask: (state, action) => {
        state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id);
        console.log(action);
       },
       
       doneTask: (state, action) => {
        let i=state.todolist.findIndex((el)=> el.id=== action.payload.id);
        state.todolist=[i]={
            ...state.todolist[i], 
            isDone:!state.todolist[i].isDone,};
       },

       updateTask: (state, action) => {
        let i=state.todolist.findIndex((el)=> el.id=== action.payload.id);
        state.todolist=[i]={
            ...state.todolist[i], 
            title:action.payload.edited.title,
            description:action.payload.edited.description,}
            console.log(action);
       },
     

  },
})

// Action creators are generated for each case reducer function
export const { addTask,removeTask,doneTask,updateTask } = todoSlice.actions

export default todoSlice.reducer