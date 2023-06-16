class calculatorServerModel 
{
    constructor() {}

    
    async calculateExpression( mathExpression )
	{
		try
		{
			let requestMetadata = 
			{
				method: "POST",
				body: JSON.stringify(mathExpression)
			};
			
			let r = await fetch('http://localhost:1337/calculatorModel/calculateExpression', requestMetadata );
			let j = await r.json();
			
			return j;
		}
		catch( error )
		{
			console.log('Error!');
		}
	}
}

export { calculatorServerModel };