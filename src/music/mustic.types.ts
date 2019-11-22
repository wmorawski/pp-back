export interface CombinePlaylistsInput {
  partyPlannerData: {
    playlists: string;
    partyId: string;
    userId: string;
    deleteAffected: boolean;
    importable: boolean;
  };
  spotifyData: {
    spotifyId: string;
    uri: string;
    name: string;
    imageUrl: string;
    spotifyExternalUrl: string;
  };
}
