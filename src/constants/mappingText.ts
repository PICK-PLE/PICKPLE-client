export const statusMapText: { [key: string]: string } = {
  pendingPayment: '입금 대기',
  pendingApproval: '승인 대기',
  approved: '승인 완료',
  rejected: '승인 거절',
  refunded: '환불 완료',
  completed: '참가 완료',
} as const;
