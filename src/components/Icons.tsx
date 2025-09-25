import React from 'react';
import {
  IconMenu2,
  IconMoon,
  IconSun,
  IconSearch,
  IconChevronDown,
  IconFileText,
  IconBook,
  IconFolder,
  IconX,
  IconCopy,
  IconCheck,
  IconArrowsMaximize,
  IconHash,
  IconSettings,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconPencil,
  IconChevronLeft,
  IconChevronRight,
  IconCalendar,
  IconUserCircle,
  IconInfoCircle,
  IconBulb,
  IconAlertTriangle,
  IconAlertOctagon,
  IconCircleCheck,
  IconHelpCircle,
  IconQuote,
  IconFlask,
  IconBug,
  IconCircleX,
  IconAlertCircle,
  IconZoomIn,
  IconFileCode,
  IconRocket,
  IconDownload,
  IconPlayerPlay,
  IconPlayerPause,
  IconExternalLink,
  IconBroadcast,
  IconVideo,
  IconMessageCircle,
  IconBook2,
  IconCode,
  IconLayoutGrid,
  IconSend,
  IconRefresh,
  IconEye,
  IconEyeOff,
  IconSparkles,
  IconSchool,
  IconClipboardText,
  IconLanguage,
  IconLayersSubtract,
  IconList,
  IconShieldCheck,
  IconBolt,
  IconScale,
  IconMinus,
  IconMathSymbols,
  IconChartBar,
  IconPresentationAnalytics,
  IconSlideshow,
  IconTrendingUp,
  IconServer2,
  IconUsers,
  Icon123,
  IconWorld,
  IconTools,
  IconWand,
  IconHeart
} from '@tabler/icons-react';

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => <IconMenu2 className={className} />;
export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => <IconMoon className={className} />;
export const SunIcon: React.FC<{ className?: string }> = ({ className }) => <IconSun className={className} />;
export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => <IconSearch className={className} />;
export const ChevronDownIcon: React.FC<{ className?: string; isRotated?: boolean }> = ({ className, isRotated }) => <IconChevronDown className={`transition-transform duration-200 ${isRotated ? '-rotate-180' : ''} ${className || ''}`} />;
export const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => <IconFileText className={className} />;
export const BookIcon: React.FC<{ className?: string }> = ({ className }) => <IconBook className={className} />;
export const FolderIcon: React.FC<{ className?: string }> = ({ className }) => <IconFolder className={className} />;
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => <IconX className={className} />;
export const CopyIcon: React.FC<{ className?: string }> = ({ className }) => <IconCopy className={className} />;
export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => <IconCheck className={className} />;
export const ExpandIcon: React.FC<{ className?: string }> = ({ className }) => <IconArrowsMaximize className={className} />;
export const LineNumbersIcon: React.FC<{ className?: string }> = ({ className }) => <IconHash className={className} />;
export const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => <IconSettings className={className} />;
export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => <IconBrandGithub className={className} />;
export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => <IconBrandTwitter className={className} />;
export const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => <IconBrandDiscord className={className} />;
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => <IconBrandLinkedin className={className} />;
export const PencilIcon: React.FC<{ className?: string }> = ({ className }) => <IconPencil className={className} />;
export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => <IconChevronLeft className={className} />;
export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => <IconChevronRight className={className} />;
export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => <IconCalendar className={className} />;
export const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => <IconUserCircle className={className} />;

// Admonition Icons
export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => <IconInfoCircle className={className} />;
export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => <IconBulb className={className} />;
export const WarningTriangleIcon: React.FC<{ className?: string }> = ({ className }) => <IconAlertTriangle className={className} />;
export const DangerIcon: React.FC<{ className?: string }> = ({ className }) => <IconAlertOctagon className={className} />;
export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => <IconCircleCheck className={className} />;
export const QuestionIcon: React.FC<{ className?: string }> = ({ className }) => <IconHelpCircle className={className} />;
export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => <IconQuote className={className} />;
export const ExampleIcon: React.FC<{ className?: string }> = ({ className }) => <IconFlask className={className} />;
export const BugIcon: React.FC<{ className?: string }> = ({ className }) => <IconBug className={className} />;
export const ErrorIcon: React.FC<{ className?: string }> = ({ className }) => <IconCircleX className={className} />;
export const ExclamationCircleIcon: React.FC<{ className?: string }> = ({ className }) => <IconAlertCircle className={className} />;

export const ZoomInIcon: React.FC<{ className?: string }> = ({ className }) => <IconZoomIn className={className} />;
export const FileCodeIcon: React.FC<{ className?: string }> = ({ className }) => <IconFileCode className={className} />;

// CTA Icons
export const RocketIcon: React.FC<{ className?: string }> = ({ className }) => <IconRocket className={className} />;
export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => <IconDownload className={className} />;
export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => <IconPlayerPlay className={className} />;
export const PauseIcon: React.FC<{ className?: string }> = ({ className }) => <IconPlayerPause className={className} />;
export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => <IconExternalLink className={className} />;
export const AudioWaveformIcon: React.FC<{ className?: string }> = ({ className }) => <IconBroadcast className={className} />;
export const VideoCameraIcon: React.FC<{ className?: string }> = ({ className }) => <IconVideo className={className} />;
export const MessageIcon: React.FC<{ className?: string }> = ({ className }) => <IconMessageCircle className={className} />;
export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => <IconBook2 className={className} />;
export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => <IconCode className={className} />;
export const LayoutIcon: React.FC<{ className?: string }> = ({ className }) => <IconLayoutGrid className={className} />;
export const PaperAirplaneIcon: React.FC<{ className?: string }> = ({ className }) => <IconSend className={className} />;
export const RefreshIcon: React.FC<{ className?: string }> = ({ className }) => <IconRefresh className={className} />;
export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => <IconEye className={className} />;
export const EyeOffIcon: React.FC<{ className?: string }> = ({ className }) => <IconEyeOff className={className} />;
export const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => <IconSparkles className={className} />;
export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => <IconSchool className={className} />;
export const ClipboardListIcon: React.FC<{ className?: string }> = ({ className }) => <IconClipboardText className={className} />;
export const LightbulbIdeaIcon: React.FC<{ className?: string }> = ({ className }) => <IconBulb className={className} />;
export const TranslateIcon: React.FC<{ className?: string }> = ({ className }) => <IconLanguage className={className} />;
export const VersionsIcon: React.FC<{ className?: string }> = ({ className }) => <IconLayersSubtract className={className} />;
export const ListIcon: React.FC<{ className?: string }> = ({ className }) => <IconList className={className} />;

// FeatureList Icons
export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => <IconShieldCheck className={className} />;
export const BoltIcon: React.FC<{ className?: string }> = ({ className }) => <IconBolt className={className} />;
export const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => <IconScale className={className} />;

// ComparisonTable Icon
export const MinusIcon: React.FC<{ className?: string }> = ({ className }) => <IconMinus className={className} />;

// Math Icon
export const MathSymbolsIcon: React.FC<{ className?: string }> = ({ className }) => <IconMathSymbols className={className} />;

// Chart Icon
export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => <IconChartBar className={className} />;

// Scrollytelling Icon
export const PresentationAnalyticsIcon: React.FC<{ className?: string }> = ({ className }) => <IconPresentationAnalytics className={className} />;

// TutorialSlider Icon
export const SlideshowIcon: React.FC<{ className?: string }> = ({ className }) => <IconSlideshow className={className} />;

// StatCards Icons
export const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => <IconTrendingUp className={className} />;
export const ServerIcon: React.FC<{ className?: string }> = ({ className }) => <IconServer2 className={className} />;
export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => <IconUsers className={className} />;
export const NumberIcon: React.FC<{ className?: string }> = ({ className }) => <Icon123 className={className} />;

// RestClient Icon
export const WorldIcon: React.FC<{ className?: string }> = ({ className }) => <IconWorld className={className} />;

// Maintenance Icon
export const ToolsIcon: React.FC<{ className?: string }> = ({ className }) => <IconTools className={className} />;

// Animate Icon
export const WandIcon: React.FC<{ className?: string }> = ({ className }) => <IconWand className={className} />;

// About Icon
export const InfoCircleIcon: React.FC<{ className?: string }> = ({ className }) => <IconInfoCircle className={className} />;

// Heart Icon
export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => <IconHeart className={className} />;