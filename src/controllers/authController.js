const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

exports.register = async (req, res) => {
    const { nombre, email, password, rol } = req.body;

    const existe = await Usuario.findOne({ where: { email } });

    if (existe) {
        return res.status(400).json({ error: "Usuario ya existe" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await Usuario.create({
        nombre,
        email,
        password: hash,
        rol
    });

    res.json(user);
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "No existe" });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).json({ error: "Incorrecto" });

    const token = jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET
    );

    res.json({ token });
};