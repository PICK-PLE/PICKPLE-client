export const statusMapText: { [key: string]: string } = {
  PENDING_PAYMENT: '입금 대기',
  PENDING_APPROVAL: '승인 대기',
  APPROVED: '승인 완료',
  REJECTED: '승인 거절',
  REFUNDED: '환불 완료',
  COMPLETED: '참가 완료',
} as const;
