angular.module("planetsList").component("planetsList", {
  templateUrl: "planets-list/planets-list.template.html",
  controller: function PlanetsListCOntroller() {
    this.planets = [
      { name: "Earth", radius: 6371 },
      { name: "Mars", radius: 3390 },
      { name: "Wenus", radius: 6052 }
    ];
  }
});
