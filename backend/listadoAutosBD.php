<?php
    use Joaquin\autoBD;

    require_once 'clases/autoBD.php';


    $tabla = isset($_GET["tabla"]) ? $_GET["tabla"] : "sin tabla";
    $autos = autoBD::traer();

  if($tabla == "mostrar")
  {
      echo   '<script src="../frontend/ManejadoraAutoBD.js"></script>';

      echo '<table><thead><tr><th>Marca</th><th>Patente</th><th>Color</th><th>Precio</th><th>Accion</th></tr></thead><tbody>';
      foreach ($autos as $auto) {
          echo "<tr>";
          echo "<td>" . $auto->marca . "</td>";
          echo "<td>" . $auto->patente . "</td>";
          echo "<td> <input type='color' id='color' value='" .$auto->color. "'/></td>";
          echo "<td>" . $auto->precio . "</td>";
          echo '<td>
          <button type="button" class="btn btn-info" onclick="PrimerParcial.ManejadoraAutoBD.ModificarAuto(' . htmlspecialchars(json_encode($auto)) . ')">
            Modificar
          </button>
          <button type="button" class="btn btn-danger" onclick="PrimerParcial.ManejadoraAutoBD.EliminarAutoBD(' . htmlspecialchars(json_encode($auto)) . ')">
            Eliminar
          </button>
          </td>';
          echo "</tr>";
      }
      echo '</tbody></table>';
  }else
  {
    echo json_encode($autos);
  }

  






