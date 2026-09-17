import { query } from "../db.js";

/**
 * Devuelve todos los artistas.
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 */
const getArtistas = async (_, res) => {
    const result = await query("SELECT * FROM artistas");
    res.json(result.rows);
};

/**
 * Devuelve un artista por su ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const getArtista = async (req, res) => {
    const result = await query(
        "SELECT * FROM artistas WHERE id = $1",
        [req.params.id]
    );
    res.json(result.rows[0]);
};

/**
 * Crea un nuevo artista.
 * @param {import('express').Request} req - Body: { nombre: string }
 * @param {import('express').Response} res
 */
const createArtista = async (req, res) => {
    const { nombre } = req.body;
    await query("INSERT INTO artistas (nombre) VALUES ($1)", [nombre]);
    res.status(201).json({ nombre });
};

/**
 * Actualiza el nombre de un artista existente.
 * @param {import('express').Request} req - Params: id. Body: { nombre: string }
 * @param {import('express').Response} res
 */
const updateArtista = async (req, res) => {
    const { nombre } = req.body;
    await query("UPDATE artistas SET nombre = $1 WHERE id = $2", [
        nombre,
        req.params.id,
    ]);
    res.json({ nombre });
};

/**
 * Elimina un artista por su ID.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const deleteArtista = async (req, res) => {
    await query("DELETE FROM artistas WHERE id = $1", [req.params.id]);
    res.sendStatus(204);
};

/**
 * Devuelve todos los álbumes de un artista, incluyendo el nombre del artista.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getAlbumesByArtista = async (req, res) => {
    const result = await query(
        `SELECT
            albumes.id,
            albumes.nombre,
            artistas.nombre AS nombre_artista
        FROM albumes
            JOIN artistas ON albumes.artista = artistas.id
        WHERE artista = $1`,
        [req.params.id]
    );

    res.json(result.rows);
};

/**
 * Devuelve todas las canciones de un artista, incluyendo datos del álbum.
 * @param {import('express').Request} req - Params: id
 * @param {import('express').Response} res
 */
const getCancionesByArtista = async (req, res) => {
    const result = await query(
        `SELECT
            canciones.id,
            canciones.nombre,
            canciones.duracion,
            canciones.reproducciones,
            artistas.nombre AS nombre_artista,
            albumes.nombre AS nombre_album
        FROM canciones
            JOIN albumes ON albumes.id = canciones.album
            JOIN artistas ON albumes.artista = artistas.id
        WHERE artista = $1`,
        [req.params.id]
    );

    res.json(result.rows);
};

const artistas = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};

export default artistas;
