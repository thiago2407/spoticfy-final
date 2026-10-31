import { query } from "../db.js";

/**
 * Devuelve todos los álbumes junto con el nombre del artista.
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 */
const getAlbumes = async (_, res) => {
    const result = await query(`
            SELECT 
                albumes.id,
                albumes.nombre,
                artistas.nombre AS nombre_artista 
            FROM albumes
                JOIN artistas ON albumes.artista = artistas.id
        `);
    res.json(result.rows);
};

/**
 * Devuelve un álbum por su ID junto con el nombre del artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getAlbum = async (req, res) => {
   const result = await query(`
            SELECT 
                albumes.id,
                albumes.nombre,
                artistas.nombre AS nombre_artista 
            FROM albumes
                JOIN artistas ON albumes.artista = artistas.id
            WHERE albumes.id = $1
        `, [req.params.id]);
    res.json(result.rows[0]);
};

/**
 * Crea un nuevo álbum.
 * @param {import('express').Request} req - Body: { nombre: string, artista: number }
 * @param {import('express').Response} res
 */
const createAlbum = async (req, res) => {
    const { nombre, artista } = req.body;
    await query("INSERT INTO albumes (nombre, artista) VALUES ($1, $2)", [nombre, artista]);
    res.status(201).json({ nombre, artista })
};

/**
 * Actualiza el nombre y artista de un álbum existente.
 * @param {import('express').Request} req - Params: id. Body: { nombre: string, artista: number }
 * @param {import('express').Response} res
 */
const updateAlbum = async (req, res) => {
    const { nombre, artista } = req.body;
    await query("UPDATE albumes SET nombre = $1, artista = $2 WHERE id = $3", [
        nombre,
        artista,
        req.params.id,
    ]);
    res.json({ nombre, artista });
};

/**
 * Elimina un álbum por su ID. Retorna 400 si el álbum tiene canciones asociadas.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const deleteAlbum = async (req, res) => {
    const {id} = req.params
    try {
        await query("delete from albumes where id = $1", [id])
    } catch (ex) {
        return res.status(400).json({error: "No se pudo eliminar el album porque contiene canciones"});
    }
    res.status(200).json({mensaje: "Eliminado exitosamente"});
};

/**
 * Devuelve todas las canciones de un álbum, incluyendo datos del artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getCancionesByAlbum = async (req, res) => {
    const {id} = req.params
    const result = await query(`SELECT 
        c.id,
        c.nombre,
        ar.nombre as nombre_artista,
        al.nombre as nombre_album,
        c.duracion,
        c.reproducciones
    FROM canciones c
    JOIN albumes al ON c.album = al.id
    JOIN artistas ar ON c.album = ar.id
    WHERE album = $1;
    `, [id]);
    res.json(result.rows);
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
