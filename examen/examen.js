class ButtonStateModel2
{
	constructor()
	{
		this.value = 0;
	}

	increment()
	{
		this.value = this.value+2;
      
	}
  
    

	read()
	{
        let value = 255; 
      
        if (this.value > value)
          
          {
            return value; 
            
          }
		return this.value;
	}
  
}

class ButtonStateModel
{
	constructor()
	{
		this.value = 0;
	}

	increment()
	{
		this.value = this.value+1;
	}

	read()
	{
		return this.value;
	}
}

class ButtonStateController
{
	constructor( model, view )
	{
		this.innerModel = model;
		this.innerView = view;
	}

	init()
	{
       
		let value = this.innerView.setValue( this.innerModel.read());
        this.innerView.ColorRGB(this.innerModel.read());
         
	}

	onclick()
	{
        
		this.innerModel.increment();
        this.innerView.ColorRGB(this.innerModel.read());
		this.innerView.setValue( this.innerModel.read());
        
	}
}

class ButtonStateView extends HTMLElement
{
	constructor()
	{
		super();

		this.innerModel = new ButtonStateModel2();
		this.innerController = new ButtonStateController(this.innerModel, this);
		
		this.customButton = document.createElement('button');
<<<<<<< HEAD
=======
        this.customButton.classList.add('input')
>>>>>>> 5e128e98d396f412d18ea2a35120001cb4728a5b
		this.appendChild(this.customButton);
	}
    
      ColorRGB(value) {
        
        const red = 255 - value;
        const color = `rgb(${red}, 0, 0)`;
        this.customButton.style.backgroundColor = color;
        
      }
	connectedCallback()
	{
		this.customButton.onclick = ()=> this.innerController.onclick();
		this.innerController.init();
	}

	setValue( value )
	{   
        
        this.customButton.innerText = value.toString();
      
	}
}

customElements.define('x-button', ButtonStateView );

function main()
{
	let testButton = new ButtonStateView();
	document.body.appendChild(testButton);
}

window.onload = main;