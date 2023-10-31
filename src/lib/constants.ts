import i18nConfig from "../../i18n.config.json"

export const OLD_CONTENT_DIR = "src/content"
export const CONTENT_DIR = "public/content"
export const TRANSLATIONS_DIR = "public/content/translations"
export const TRANSLATED_IMAGES_DIR = "/content/translations"

// i18n
export const DEFAULT_LOCALE = "en"
// Sorted list of supported locales codes, defined in `i18n.config.json`
export const LOCALES_CODES = i18nConfig.map((lang) => lang.code).sort()

// Site urls
export const SITE_URL = "https://ethereum.org"
export const DISCORD_PATH = "/discord/"

// Config
export const CONTENT_IMAGES_MAX_WIDTH = 800
export const GITHUB_BASE_API =
  "https://api.github.com/repos/ethereum/ethereum-org-website"
export const GITHUB_COMMITS_URL = GITHUB_BASE_API + "/commits"
export const GITHUB_LAST_DEPLOY_URL =
  GITHUB_BASE_API + "/pulls?base=master&state=closed"

// Quiz Hub
export const PROGRESS_BAR_GAP = "4px"
export const PASSING_QUIZ_SCORE = 65
export const USER_STATS_KEY = "quizzes-stats"
export const INITIAL_QUIZ = "what-is-ethereum"
export const TOTAL_QUIZ_QUESTIONS_ANSWERED = 100000
export const TOTAL_QUIZ_AVERAGE_SCORE = 67.4
export const TOTAL_QUIZ_RETRY_RATE = 15.6
