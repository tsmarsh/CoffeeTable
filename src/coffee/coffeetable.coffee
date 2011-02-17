root = this

class Dimension
    constructor: (@name, @values, @selected) ->

root.CoffeeTable =    
    DimensionRepository:
        dimensions: [
            new Dimension("Tom", ["1,1,2"], false),
            new Dimension("Dick", ["3,1,4"], false),
            new Dimension("Harry", ["6,6,6"], false) 
        ]
        
        list: -> this.dimensions
    
    AvailableDimensionController:
        initialise: ->
            CoffeeTable.AvailableDimensionView.showList CoffeeTable.DimensionRepository.list()
        
    AvailableDimensionView:
        showList: (dimensions) ->
            appendDimension = (dimension) ->
                renderedTemplate = $("#dimension-template").tmpl(dimension).draggable()
                renderedTemplate.appendTo $("#available-dimensions ul")   
                  
            appendDimension dimension for dimension in dimensions   
    
    SelectedDimensionController:
        initialise: ->
            $("#selected-dimensions").droppable 
                drop: CoffeeTable.SelectedDimensionController.receiveDimension
        
        receiveDimension: (event, ui) ->
            dimensionListItem = $(ui.draggable)
            alert dimensionListItem.find("strong").text()
            
$(document).ready ->
    CoffeeTable.AvailableDimensionController.initialise()
    CoffeeTable.SelectedDimensionController.initialise()