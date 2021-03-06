export class Rectangle {
    public element: SVGRectElement;
    private selfX: number;
    private selfY: number;
    private selfWidth: number;
    private selfHeight: number;
    private fillColor: string;
    private strokeColor: string;
    private strokeWidth: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * this.x get & set
     */
    public get x(): number {
        return this.selfX;
    }

    public set x(newX: number) {
        this.selfX = newX;
        this.element.setAttribute("x", `${newX}px`);
    }

    /**
     * this.y get & set
     */
    public get y(): number {
        return this.selfY;
    }

    public set y(newY: number) {
        this.selfY = newY;
        this.element.setAttribute("y", `${newY}px`);
    }

    /**
     * this.width get & set
     */
    public get width(): number {
        return this.selfWidth;
    }

    public set width(newWidth: number) {
        this.selfWidth = newWidth;
        this.element.setAttribute("width", `${newWidth}px`);
    }

    /**
     * this.height get & set
     */
    public get height(): number {
        return this.selfHeight;
    }

    public set height(newHeight: number) {
        this.selfHeight = newHeight;
        this.element.setAttribute("height", `${newHeight}px`);
    }


    public get fill(): string {
        return this.fillColor;
    }

    public set fill(color: string) {
        this.fillColor = this.element.style.fill = color;
    }

    public get lineColor(): string {
        return this.strokeColor;
    }

    public set lineColor(color: string) {
        this.strokeColor = this.element.style.stroke = color;
    }

    public get lineWidth(): number {
        return this.strokeWidth;
    }

    public set lineWidth(width: number) {
        this.strokeWidth = width;
        this.element.style.strokeWidth = `${width}px`;
    }
}
