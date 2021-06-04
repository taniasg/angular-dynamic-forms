export const patterns = {
    "alphanumeric": new RegExp(/^([a-zA-ZäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ0-9\u00f1\u00d1 _.-]+)$/),
    "email": new RegExp(/^[0-9a-z-A-Z_\.]{3,}@([\w-]+\.)+[\w-]{2,4}$/),
    "numeric": new RegExp(/^[0-9]*$/),
    "cell": new RegExp(/^\b[A-Z]{1,2}([0-9]{1,2})\b$/),
    "decimal": new RegExp(/^[0-9]+\.(([0-9]+)*)?$/),
    "time": new RegExp(/^(((0|1)[0-9])|2[0-3]):[0-5][0-9]$/)
}