---
title: "Sesión 1: Introducción a Spring Boot"
position: 1
author: "El Equipo de Spring Boot"
date: "2024-09-01"
---

# Sesión 1: Introducción a Spring y Spring Boot

Bienvenidos a la primera sesión de nuestro tutorial de Spring Boot. En esta sesión, exploraremos qué es el ecosistema de Spring y cómo Spring Boot simplifica el desarrollo en Java.

```admonition
---
type: info
title: "La Filosofía de Spring"
---
La idea central detrás de Spring y Spring Boot es facilitar la vida de los desarrolladores al encargarse de la configuración y la infraestructura, permitiéndoles centrarse en la lógica de negocio. Esto se logra a través de principios como la Inyección de Dependencias y la Convención sobre Configuración.
```

## ¿Qué es Spring Framework?

Spring es un potente framework de código abierto para crear aplicaciones empresariales robustas en Java. Su objetivo principal es simplificar el desarrollo de aplicaciones Java a gran escala, promoviendo buenas prácticas como la programación orientada a aspectos (AOP) y la inversión de control (IoC). Proporciona un modelo de programación y configuración integral para aplicaciones empresariales modernas basadas en Java, en cualquier tipo de plataforma de despliegue.

## ¿Qué es Spring Boot?

Spring Boot es una evolución de Spring Framework que facilita aún más la creación de aplicaciones autónomas y de grado de producción basadas en Spring que puedes "simplemente ejecutar". Adopta una visión "opinada" de la plataforma Spring y de las librerías de terceros para que puedas empezar con el mínimo esfuerzo. La mayoría de las aplicaciones Spring Boot necesitan una configuración mínima de Spring.

```video
---
src: "https://www.youtube.com/watch?v=mksMlTrV8QA"
title: "Video: ¿Qué es Spring Boot en 10 minutos?"
---
```

### Características Clave

```feature-list
---
items:
  - icon: "RocketIcon"
    title: "Dependencias 'starter' opinadas"
    content: "Simplifica la configuración de tu build proporcionando un conjunto de descriptores de dependencias convenientes que puedes incluir en tu aplicación."
  - icon: "SettingsIcon"
    title: "Configuración Automática"
    content: "Spring Boot configura automáticamente tu aplicación basándose en las dependencias JAR que has añadido. Por ejemplo, si `HSQLDB` está en tu classpath y no has configurado manualmente ningún bean de conexión a la base de datos, Spring Boot autoconfigura una base de datos en memoria."
  - icon: "ServerIcon"
    title: "Servidores Embebidos"
    content: "Construye fácilmente aplicaciones con servidores embebidos como Tomcat, Jetty o Undertow directamente. No necesitas desplegar archivos WAR."
  - icon: "TrendingUpIcon"
    title: "Funcionalidades Listas para Producción"
    content: "Proporciona características listas para producción como métricas, comprobaciones de estado y configuración externalizada de serie."
---
```

### Ventajas Principales

```stat-cards
---
columns: 3
items:
  - icon: "BoltIcon"
    value: "Rápido"
    label: "Desarrollo Ágil"
    color: "blue"
  - icon: "LayoutIcon"
    value: "Simple"
    label: "Menos Boilerplate"
    color: "green"
  - icon: "GeminiIcon"
    value: "Integrado"
    label: "Ecosistema Spring"
    color: "teal"
---
```
