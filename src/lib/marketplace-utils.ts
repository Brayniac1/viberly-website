import { 
  Code, 
  PenTool, 
  Megaphone, 
  Workflow, 
  Palette,
  Database,
  Shield,
  Zap,
  Settings,
  BookOpen,
  Target,
  Briefcase,
  LucideIcon
} from "lucide-react";

export const formatPrice = (priceInCents: number | null): string => {
  if (!priceInCents || priceInCents === 0) return "Free";
  return `$${(priceInCents / 100).toFixed(2)}`;
};

export const getCategoryIcon = (type: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    "Programming": Code,
    "Marketing": Megaphone,
    "Writing": PenTool,
    "Design": Palette,
    "Productivity": Workflow,
    "Data": Database,
    "Security": Shield,
    "DevOps": Settings,
    "Business": Briefcase,
    "Education": BookOpen,
    "Analytics": Target,
  };

  return iconMap[type] || Zap;
};

export const getSubcategoryDisplayName = (subcategory: string): string => {
  // Convert technical subcategory names to user-friendly display names
  const displayMap: Record<string, string> = {
    "Debugging": "Debug & Fix",
    "Code Review": "Code Review",
    "Refactoring": "Code Refactoring",
    "Testing": "Testing & QA",
    "Documentation": "Documentation",
    "API Design": "API Development",
    "Frontend": "Frontend Development",
    "Backend": "Backend Development",
    "DevOps": "DevOps & Deployment",
    "Database": "Database Design",
    "Security": "Security & Auth",
    "Performance": "Performance Optimization",
    "Data Engineering": "Data Engineering",
    "Prompt Engineering": "AI Prompting",
    "Standard Guards": "Code Standards",
    "Process": "Process Optimization",
    "Inventory Management": "Inventory Systems",
    "Email Marketing": "Email Campaigns",
    "Meeting Management": "Meeting Planning",
    "Content Analysis": "Content Strategy",
  };

  return displayMap[subcategory] || subcategory;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export const getPromptDescription = (prompt: any): string => {
  // Generate a description based on the prompt data
  const category = getSubcategoryDisplayName(prompt.subcategory);
  const labels = prompt.labels?.slice(0, 3).join(", ") || "";
  
  if (labels) {
    return `${category} prompt focusing on ${labels}`;
  } else {
    return `Professional ${category.toLowerCase()} prompt for enhanced productivity`;
  }
};