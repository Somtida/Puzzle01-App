System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n\t\t<section class=\"setup\">\n\t\t\t<h1>Game Setup</h1>\n\t\t\tEnter your name please:\n\t\t\t<input type=\"text\" #name (keyup)=\"0\">\n\t\t</section>\n\t\t<br>\n\t\t<section \n\t\t[ngClass]=\"{\n\t\t\tpuzzle : true,\n\t\t\tsolved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n\t\t}\"\n\t\t[ngStyle]=\"{display: name.value === ''? 'none':'block'}\">\n\t\t\t<h2>\n\t\t\t\tThe Puzzle | \n\t\t\t\t{{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number? 'SOLVED':'NOT SOLVED'}}\n\t\t\t</h2>\n\t\t\t<p>Welcome <span class=\"name\">{{name.value}}</span></p>\n\t\t\t<br>\n\t\t\tSwitch 1: <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n\t\t\tSwitch 2: <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n\t\t\tSwitch 3: <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n\t\t\tSwitch 4: <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n\t\t</section>\n\t\t<h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEEsa0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3RixDQUFDO2dCQTVDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsMHNDQXlCVDtxQkFFRCxDQUFDOzttQ0FBQTtnQkFpQkYsc0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LXB1enpsZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuXHRcdFx0PGgxPkdhbWUgU2V0dXA8L2gxPlxuXHRcdFx0RW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdDxicj5cblx0XHQ8c2VjdGlvbiBcblx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRwdXp6bGUgOiB0cnVlLFxuXHRcdFx0c29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJcblx0XHR9XCJcblx0XHRbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJyc/ICdub25lJzonYmxvY2snfVwiPlxuXHRcdFx0PGgyPlxuXHRcdFx0XHRUaGUgUHV6emxlIHwgXG5cdFx0XHRcdHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyPyAnU09MVkVEJzonTk9UIFNPTFZFRCd9fVxuXHRcdFx0PC9oMj5cblx0XHRcdDxwPldlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuXHRcdFx0PGJyPlxuXHRcdFx0U3dpdGNoIDE6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCI+PGJyPlxuXHRcdFx0U3dpdGNoIDI6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuXHRcdFx0U3dpdGNoIDM6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxuXHRcdFx0U3dpdGNoIDQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+PGJyPlxuXHRcdDwvc2VjdGlvbj5cblx0XHQ8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cblx0YFxuXHRcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcblx0c3dpdGNoMk51bWJlcjogbnVtYmVyO1xuXHRzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG5cdHN3aXRjaDROdW1iZXI6IG51bWJlcjtcblxuXHRuZ09uSW5pdCgpe1xuXHRcdHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cdFx0dGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblx0XHR0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXHRcdHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
