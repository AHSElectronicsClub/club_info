export default ALL_TAGS = [...new Set(PROJECTS_DATA.flatMap(p => p.tags))].sort();
