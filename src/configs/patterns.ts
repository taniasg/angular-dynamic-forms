export const patterns = {
    "alphanumeric": new RegExp(/^[A-Za-z ñÑáéíóúÁÉÍÓÚ]*[A-Za-zñÑáéíóúÁÉÍÓÚ][A-Za-z ñÑáéíóúÁÉÍÓÚ]*$/),
    "email": new RegExp(/^[0-9a-z-A-Z_\.]{3,}@([\w-]+\.)+[\w-]{2,4}$/)
}