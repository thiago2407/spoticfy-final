import { query } from "../db.js";

/**
 * Devuelve todas las canciones junto con datos del álbum y artista.
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 */
const getCanciones = async (_, res) => {
  // Completar con la consulta que devuelve todas las canciones
  // Recordar que los parámetros de una consulta GET se encuentran en req.params
  // Deberían devolver los datos de la siguiente forma:
  /*
        [
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            ...
        ]
    */
};

/**
 * Devuelve una canción por su ID junto con datos del álbum y artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getCancion = async (req, res) => {
  // Completar con la consulta que devuelve una canción
  // Recordar que los parámetros de una consulta GET se encuentran en req.params
  // Deberían devolver los datos de la siguiente forma:
  /*
        {
            "id": "Id de la canción",
            "nombre": "Nombre de la canción",
            "nombre_artista": "Id del artista",
            "nombre_album": "Id del album",
            "duracion": "Duración de la canción",
            "reproducciones": "Reproducciones de la canción"
        }
    */
};

/**
 * Crea una nueva canción con reproducciones inicializadas en 0.
 * @param {import('express').Request} req - Body: { nombre: string, album: number, duracion: number }
 * @param {import('express').Response} res
 */
const createCancion = async (req, res) => {
  // Completar con la consulta que crea una canción
  // Recordar que los parámetros de una consulta POST se encuentran en req.body
  // Deberían recibir los datos de la siguiente forma:
  /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
  // (Reproducciones se inicializa en 0)
};

/**
 * Actualiza el nombre, álbum y duración de una canción existente.
 * @param {import('express').Request} req - Params: id. Body: { nombre: string, album: number, duracion: number }
 * @param {import('express').Response} res
 */
const updateCancion = async (req, res) => {
  // Completar con la consulta que actualiza una canción
  // Recordar que los parámetros de una consulta PUT se encuentran en req.body
  // Deberían recibir los datos de la siguiente forma:
  /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
  // (Reproducciones no se puede modificar con esta consulta)
};

/**
 * Elimina una canción por su ID.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const deleteCancion = async (req, res) => {
  // Completar con la consulta que elimina una canción
  // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

/**
 * Incrementa en 1 el contador de reproducciones de una canción.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const reproducirCancion = async (req, res) => {
  // Completar con la consulta que aumenta las reproducciones de una canción
  // En este caso es una consulta PUT, pero no recibe ningún parámetro en el body, solo en los params
};

const canciones = {
  getCanciones,
  getCancion,
  createCancion,
  updateCancion,
  deleteCancion,
  reproducirCancion,
};

export default canciones;
