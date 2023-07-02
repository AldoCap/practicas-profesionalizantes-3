import { calculatorDefaultView } from './view/calculatorDefaultView.js';
import { calculatorDefaultController } from './controller/calculatorDefaultController.js';
import { calculatorDefaultModel } from './model/calculatorDefaultModel.js'; 

class HTMLCalculator extends HTMLElement
{
	constructor( modelConstructor = calculatorDefaultModel )
	{
		super();
		
		this.attachShadow({ mode: "open" });

		this.innerView = new calculatorDefaultView();
		this.innerModel = new modelConstructor();
		this.innerController = new calculatorDefaultController(this.innerView, this.innerModel);

		
		let style = document.createElement('style');
		style.innerText =
		`button
		{
			background-color: blue;
			color: white;
			font-family: arial;
			border: 1px solid black;
		}`; //classless CSS

		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(this.innerView);
		
	}

	connectedCallback()
	{
		this.innerController.enable();
	}

	disconnectedCallback()
	{
		this.innerController.disable();
	}

	adoptedCallback()
	{
		//Not yet
	}

	attributeChangedCallback( newValue, oldValue )
	{

	}

	static get observedAttributes()
	{
		return [];
	}
}

customElements.define('x-calculator', HTMLCalculator );

export { HTMLCalculator };