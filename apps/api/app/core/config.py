from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    APP_ENV: str = "development"
    APP_SECRET_KEY: str = "change-me-in-production"
    FRONTEND_URL: str = "http://localhost:3000"

    # F2+: auth, db, email, storage
    DATABASE_URL: str = ""
    RESEND_API_KEY: str = ""
    RESEND_FROM_EMAIL: str = "hola@lacanteraws.com"
    TURNSTILE_SECRET_KEY: str = ""
    CLOUDFLARE_R2_BUCKET: str = "lacantera-uploads"
    CLOUDFLARE_R2_ACCESS_KEY: str = ""
    CLOUDFLARE_R2_SECRET_KEY: str = ""
    CLOUDFLARE_R2_ACCOUNT_ID: str = ""

    @property
    def is_production(self) -> bool:
        return self.APP_ENV == "production"


settings = Settings()
