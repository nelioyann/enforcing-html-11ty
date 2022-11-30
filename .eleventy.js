module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksFilter("enforce", function(value) {
        if(value === undefined){
            throw "A parameter is missing"
        }
        return(value);
    });

    return {
        dir: {
            input: "src"
        }
    }
}