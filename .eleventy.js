module.exports = function (eleventyConfig) {

    eleventyConfig.addNunjucksFilter("enforced", function(value, force) {
        if(value === undefined ){
            throw new Error("A parameter is missing") 
        }
        if( force === true ){
            throw new Error(`An error occured: ${value}`);
        }
        return(value);
    });

    return {
        dir: {
            input: "src"
        }
    }
}