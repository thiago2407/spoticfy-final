import { query } from "../db.js";

/**
 * Devuelve todos los álbumes junto con el nombre del artista.
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 */
const getAlbumes = async (_, res) => {
  // Completar con la consulta que devuelve todos los albumes
  // Recordar que los parámetros de una consulta GET se encuentran en req.params
  // Deberían devolver los datos de la siguiente forma:
  /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */
};

/**
 * Devuelve un álbum por su ID junto con el nombre del artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getAlbum = async (req, res) => {
  // Completar con la consulta que devuelve un album por id
  // Recordar que los parámetros de una consulta GET se encuentran en req.params
  // Deberían devolver los datos de la siguiente forma:
  /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */
};

/**
 * Crea un nuevo álbum.
 * @param {import('express').Request} req - Body: { nombre: string, artista: number }
 * @param {import('express').Response} res
 */
const createAlbum = async (req, res) => {
  // Completar con la consulta que crea un album
  // Recordar que los parámetros de una consulta POST se encuentran en req.body
  // Deberían recbir los datos de la siguiente forma:
  /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

/**
 * Actualiza el nombre y artista de un álbum existente.
 * @param {import('express').Request} req - Params: id. Body: { nombre: string, artista: number }
 * @param {import('express').Response} res
 */
const updateAlbum = async (req, res) => {
  // Completar con la consulta que actualiza un album
  // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
  // Deberían recbir los datos de la siguiente forma:
  /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

/**
 * Elimina un álbum por su ID. Retorna 400 si el álbum tiene canciones asociadas.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const deleteAlbum = async (req, res) => {
  // Completar con la consulta que elimina un album
  // ¡Ojo con albumes que tengan canciones! Devuelvan el error apropiado, 400.
  // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

/**
 * Devuelve todas las canciones de un álbum, incluyendo datos del artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getCancionesByAlbum = async (req, res) => {
  // Completar con la consulta que devuelve las canciones de un album
  // Recordar que los parámetros de una consulta GET se encuentran en req.params
  // Deberían devolver los datos de la misma forma que getCanciones
};

const albumes = {
  getAlbumes,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  getCancionesByAlbum,
};

export default albumes;
