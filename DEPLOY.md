# Инструкция по развертыванию на Amvera

Этот документ описывает канонический способ развертывания проекта на платформе Amvera.

## 1. Конфигурация

В корне проекта должен находиться файл `amvera.yml` следующего содержания. Он настроен для выполнения сборки (`npm run build`) на сервере Amvera.

```yaml
meta:
  environment: node
  toolchain:
    name: npm
    version: 20

build:
  additionalCommands: npm run build

run:
  command: npm start
  containerPort: 3000
```

## 2. Процесс развертывания

Развертывание инициируется командой `git push` в репозиторий Amvera.

### Шаг 1: Подключение удаленного репозитория (выполняется один раз)

```bash
git remote add amvera https://git.amvera.ru/maxmaxmaximusfree/profgas
```

### Шаг 2: Отправка изменений для деплоя

```bash
# Добавить все изменения
git add .

# Создать коммит
git commit -m "feat: Deploy changes"

# Отправить код в Amvera
git push amvera master
```
*Если ваша основная ветка называется `main`, используйте `git push amvera main:master`.*

## 3. Мониторинг

Логи сборки и работы приложения доступны в панели управления Amvera. Это первое место для проверки в случае возникновения проблем.
