module.exports = function (eleventyConfig) {

    eleventyConfig.addNunjucksFilter("enforced", function(value) {
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