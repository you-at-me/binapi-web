/**
 * 权限校验
 * @see https://umijs.org/docs/max/access
 */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};

  return {
    canUser: loginUser, // 普通用户权限
    canAdmin: loginUser?.userRole == "admin" // 现改成我们设置的配置，只有当我们的用户角色是 admin 才具备管理员权限; 用户角色是在数据库当中配置的
    // canAdmin: currentUser && currentUser.access == "admin", // 管理员权限，并且得是 admin 用户才行; 这是默认的校验配置
  };
}
