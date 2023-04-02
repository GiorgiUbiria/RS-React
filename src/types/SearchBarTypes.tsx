export type SearchBarProps = {
  onSearchTermChange: (newSearchTerm: string) => void;
  searchTerm: string;
};

export type State = {
  searchTerm: string;
};
