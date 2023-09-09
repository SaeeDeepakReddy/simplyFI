class Route {
  constructor() {
    this.citiesList = new Map();
  }

  addCity(start, destination) {
    if (!this.citiesList.has(start)) {
      this.citiesList.set(start, []);
    }
    this.citiesList.get(start).push(destination);
  }

  findRoute(start) {
    const visited = new Set();
    const route = [];

    const dfs = (city) => {
      if (!visited.has(city)) {
        visited.add(city);
        route.push(city);

        if (this.citiesList.has(city)) {
          for (const newCity of this.citiesList.get(city)) {
            dfs(newCity);
          }
        }
      }
    };

    dfs(start);
    return route;
  }
}

// Create a graph and add the available train tickets as edges
const europeRoute = new Route();
europeRoute.addCity('Kiev', 'Prague');
europeRoute.addCity('Prague', 'Zurich');
europeRoute.addCity('Zurich', 'Amsterdam');
europeRoute.addCity('Berlin', 'Kiev');
europeRoute.addCity('Berlin', 'Amsterdam');
europeRoute.addCity('Barcelona', 'Berlin');
europeRoute.addCity('Paris', 'Skopje');
europeRoute.addCity('Skopje', 'Paris');
europeRoute.addCity('Amsterdam', 'Barcelona');

// Find the route starting from Kiev
const startCity = 'Kiev';
const route = europeRoute.findRoute(startCity);

console.log("Your son's route:", route.join(' -> '));