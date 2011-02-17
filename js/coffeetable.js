(function() {
  var Dimension, root;
  root = this;
  Dimension = (function() {
    function Dimension(name, values, selected) {
      this.name = name;
      this.values = values;
      this.selected = selected;
    }
    return Dimension;
  })();
  root.CoffeeTable = {
    DimensionRepository: {
      dimensions: [new Dimension("Tom", ["1,1,2"], false), new Dimension("Dick", ["3,1,4"], false), new Dimension("Harry", ["6,6,6"], false)],
      list: function() {
        return this.dimensions;
      }
    },
    AvailableDimensionController: {
      initialise: function() {
        return CoffeeTable.AvailableDimensionView.showList(CoffeeTable.DimensionRepository.list());
      }
    },
    AvailableDimensionView: {
      showList: function(dimensions) {
        var appendDimension, dimension, _i, _len, _results;
        appendDimension = function(dimension) {
          var renderedTemplate;
          renderedTemplate = $("#dimension-template").tmpl(dimension).draggable();
          return renderedTemplate.appendTo($("#available-dimensions ul"));
        };
        _results = [];
        for (_i = 0, _len = dimensions.length; _i < _len; _i++) {
          dimension = dimensions[_i];
          _results.push(appendDimension(dimension));
        }
        return _results;
      }
    },
    SelectedDimensionController: {
      initialise: function() {
        return $("#selected-dimensions").droppable({
          drop: CoffeeTable.SelectedDimensionController.receiveDimension
        });
      },
      receiveDimension: function(event, ui) {
        var dimensionListItem;
        dimensionListItem = $(ui.draggable);
        return alert(dimensionListItem.find("strong").text());
      }
    }
  };
  $(document).ready(function() {
    CoffeeTable.AvailableDimensionController.initialise();
    return CoffeeTable.SelectedDimensionController.initialise();
  });
}).call(this);
