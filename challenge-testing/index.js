class CarritoCompra {
 //Aqui tu código:
 constructor() {
    this.productos = [];
 }

 agregarProducto(producto) {
    this.productos.push(producto);
 }

 calcularTotal(){
    let total = 0;
    for(let producto of this.productos) {
        total += producto.precio;
    }
    return total; 
 }

 aplicarDescuento(porcentaje) {
    //* Aqui colocamos una validacion para que el descuento sea entre 0 y 100
    if (porcentaje < 0 || porcentaje > 100) {
        return "El descuento debe ser entre 0 y 100%";
    }
    const total = this.calcularTotal();
    //* Formula para el descuento = total * (porcentaje / 100)
    const totalConDescuento = total * (porcentaje / 100);
    return totalConDescuento; 
 }
}

module.exports = CarritoCompra;