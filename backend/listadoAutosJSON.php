<?php
use Joaquin\auto;
require_once './clases/auto.php';

$accion = isset($_GET["accion"]) ? $_GET["accion"] : "sin accion";
$resultado = auto::traerJSON('./archivos/autos.json');

if ($resultado !== null) 
{
    echo   '<script src="../frontend/Manejadora.js"></script>';

      echo '<table><thead><tr><th>Marca</th><th>Patente</th><th>Color</th><th>Precio</th></tr></thead><tbody>';
      foreach ($resultado as $auto) {
          echo "<tr>";
          echo "<td>" . $auto->marca . "</td>";
          echo "<td>" . $auto->patente . "</td>";
          echo "<td> <input type='color' id='color' value='" .$auto->color. "'/></td>";
          echo "<td>" . $auto->precio . "</td>";
          echo "</tr>";
      }
      echo '</tbody></table>';
} 
else 
{
    echo "No se pudo cargar el archivo JSON.";
}
