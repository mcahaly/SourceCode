var CalculateFibonacciSeries = (function()
{
	var currentSeries = [];
    var calculateFibonacci = function(n)
    {
		var previous;
        var current;
        previous = current = next = 1;
		for(var i = 0;i< n; i++)
		{
			if(i <= 1)
			{
				currentSeries.push(current);
				continue;
			}
			var temp = current;
            current = current + previous;
			previous = temp;
			currentSeries.push(current);
		}
    }
    var getSeries = function(){
        return currentSeries;
    }    
    return { 
        CalculateFibonacci: calculateFibonacci,
        GetSeries: getSeries
    };      
})();
