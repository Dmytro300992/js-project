/*Практика*/

function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;

    this.getDencity = function() {
        return this.population / this.area;
    }
}

const Ukraine = new Country('Ukraine', '43810', '603700');