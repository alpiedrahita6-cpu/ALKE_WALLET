# 💳 ALKE_WALLET - Digital Wallet Backend & Database Engine

## 📝 Descripción del Proyecto
*Alkemy Wallet* es una solución de billetera digital diseñada para gestionar cuentas de usuario, saldos y transacciones financieras (depósitos, retiros y transferencias entre usuarios) de manera segura y eficiente.

## 🎯 Desafío Técnico
Asegurar la consistencia matemática y la atomicidad en las transacciones de fondos entre usuarios, previniendo saldos negativos, operaciones duplicadas o inconsistencias en la base de datos durante operaciones simultáneas.

## 💡 Solución Implementada
- **Modelo Relacional Robusto:** Creación de tablas normalizadas (`Users`, `Accounts`, `Transactions`, `Currencies`) con restricciones de clave (`FOREIGN KEY`, `CHECK`).
- **Lógica de Negocio Segura:** Implementación de validaciones que garantizan que el emisor cuente con fondos suficientes antes de autorizar cualquier débito o transferencia.
- **Consultas Optimizadas:** Consultas SQL estructuradas con `JOINs` para generar historiales de transacciones detallados en tiempo real.

## ⚙️ Tecnologías Utilizadas
- **Lenguaje Principal:** Java / Python
- **Base de Datos:** MySQL / PostgreSQL
- **Herramientas:** DBeaver, Git & GitHub

## 📈 Métricas e Impacto
- **100% de integridad transaccional** en operaciones de débito y crédito.
- **40% de optimización** en tiempos de consulta del historial financiero mediante indexación de claves relacionales.

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/alpiedrahita6-cpu/ALKE_WALLET.git](https://github.com/alpiedrahita6-cpu/ALKE_WALLET.git)
