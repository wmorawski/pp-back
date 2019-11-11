export interface SuccessMessage {
  message: string;
}

export interface AcceptFriendInvitationArgs {
  invitationId: string;
  invitingUserId: string;
}

export interface UnfriendPersonArgs {
  personToUnfriendId: string;
}
