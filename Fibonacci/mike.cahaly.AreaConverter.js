var AreaConverter = (function()
{
    var MUinSquareKilometer = 0.0015;
    var SquareKilometersToMU = function(SquareKilometer)
    {
        return SquareKilometer * MUinSquareKilometer;
    }
    var MUToSquareKilometers = function (MU)
    {
        console.log(MU);
        if(MU <=0)
        {
            return 0;
        }
            console.log(MUinSquareKilometer);
            return MU / MUinSquareKilometer;
    }
    return{ 
         ConvertSquareMetersToMU : SquareKilometersToMU,
         ConvertMUToSquareKilometers: MUToSquareKilometers
    };      
})();