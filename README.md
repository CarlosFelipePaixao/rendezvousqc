# 🩺 rendezvousqc – Simulateur de prise de rendez-vous médical | Medical Appointment Booking Simulator

**FR (Québec)** | **EN (English)**

---

## 🎯 Objectif | Purpose

**FR**  
Ce projet est un simulateur complet de prise de rendez-vous médical, inspiré des principes de fonctionnement des services de santé publics du Québec (ex. : RAMQ). Il a été conçu pour démontrer la capacité de développer des applications Web modernes, intuitives et alignées avec les besoins numériques du secteur public québécois.

**EN**  
This project is a full-stack medical appointment simulator inspired by the principles of Québec's public healthcare systems (e.g., RAMQ). It was built to showcase the ability to design modern, intuitive, and purpose-driven web applications, aligned with the digital service expectations of Québec’s public sector.

---

## 🛠️ Technologies utilisées | Technologies Used

- **Frontend** : React + Tailwind CSS (Vite)
- **Backend** : Node.js + Express + Joi + dotenv
- **Persistance** : Fichier JSON local (simule une base de données)
- **Style** : Interface minimaliste, pensée pour l’accessibilité

---

## 🚀 Fonctionnalités | Features

**FR**
- Formulaire de réservation avec validation
- Affichage dynamique des rendez-vous existants
- Modification du statut : *en attente*, *confirmé*, *annulé*
- Suppression d’un rendez-vous

**EN**
- Booking form with validation
- Real-time display of scheduled appointments
- Status updates: *pending*, *confirmed*, *cancelled*
- Delete appointment functionality

---

## 📂 Lancement local | Local Setup

### Démarrer l’API (backend) | Start the API (backend)

```bash
cd backend
npm install
npm start
