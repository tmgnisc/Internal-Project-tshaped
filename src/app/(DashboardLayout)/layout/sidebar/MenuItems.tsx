import {
  IconFolderPlus,
  IconBrain,
  IconChartBar,
  IconSearch,
  IconLayoutDashboard,
  IconTargetArrow,
} from "@tabler/icons-react";

const Menuitems = [
  {
    navlabel: true,
    subheader: "SEO WORKBENCH",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: "projects",
    title: "Project Add/Delete",
    icon: IconFolderPlus,
    href: "/projects",
  },
  {
    id: "llm-tracking",
    title: "LLM Tracking (Per Project)",
    icon: IconBrain,
    href: "/llm-tracking",
  },
  {
    id: "rank-tracking",
    title: "Rank Tracking (Per Project)",
    icon: IconChartBar,
    href: "/rank-tracking",
  },
  {
    id: "keyword-research",
    title: "Keyword Research",
    icon: IconSearch,
    href: "/keyword-research",
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    icon: IconTargetArrow,
    href: "/competitor-analysis",
  },
];

export default Menuitems;


