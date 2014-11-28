Custom Radio
============

This is some css that allow you to style (in CSS3 and HTML5) the `input type=radio` elements as a Custom Radio

## Getting Started
To enjoy it just link to your template or to your stylesheet the `css/style.css` file.

You can also use the less file available at `less/style.less`. With this file you can overide easily customize the Less variables listed below in order to define colors, sizes and more.

## Bower Usage
Install and manage Custom Radio using Bower.
`$ bower install custom-radio`

## The Markup
In order to enjoy the css designed, you just need an `input type=radio` with the class `.toggleSwitch` and just after as direct sibling a `label` element. Don't forget to link the label to you radio name or id.

###basic
     <input class="customRadio" id="example-1" type="radio"> 
     <label for="example-1">Label</label> 

###checked
     <input class="customRadio" id="example-2" type="radio" checked> 
     <label for="example-2">Label</label>

###disabled
     <input class="customRadio" id="example-3" type="radio" disabled> 
     <label for="example-3">Label</label>

###checked & disabled
     <input class="customRadio" id="example-4" type="radio" disabled checked> 
     <label for="example-4">Label</label>
     
## Less Variables
The variables are divided in two categories, the `modules` and the `themes`. The module variables change the structure and the behave of the component in your template. The theme just change the look without size or layout consequences. Those two kinds of variables are called `parameters` and you can find them in `/less/parameters`.

* @customRadio_transitionDuration: 100ms
* @customRadio_transitionDuration: 100ms
* @customRadio_height: 20px
* @customRadio_width: 20px
* @customRadio_borderWidth: 1px
* @customRadio_borderColor: #cdcdcd
* @customRadio_borderColor-_hover: @customRadio_borderColor
* @customRadio_borderColor-_checked: @customRadio_borderColor
* @customRadio_borderColor-_hover-_checked: @customRadio_borderColor
* @customRadio_bgColor: white
* @customRadio_bgColor-_hover: @customRadio_bgColor
* @customRadio_bgColor-_checked: @customRadio_bgColor
* @customRadio_bgColor-_hover-_checked: @customRadio_bgColor
* @customRadio_boxShadow: 0 1px 5px 0 fade(#333, 15%)
* @customRadio_boxShadow-_hover: @customRadio_boxShadow
* @customRadio_boxShadow-_checked: @customRadio_boxShadow
* @customRadio_boxShadow-_hover-_checked: @customRadio_boxShadow
* @customRadio_opacity-_disabled: 0.50
* @customRadio-label_marginLeft: 15px
* @customRadio-witness_height: 8px
* @customRadio-witness_width: 8px
* @customRadio-witness_bgColor: #e36566

designed by Clément Menant and Loïc Goyet for AppVentus. with love from Nantes
