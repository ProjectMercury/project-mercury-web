export const groupNotificationsByForm = array => {
  const grouped = [];
  new Map(
    [...new Set(array)].map(x => [
      x.form_title,
      array.filter(y => y.form_title === x.form_title).length
    ])
  ).forEach(function(value, key) {
    grouped.push({
      form_title: key,
      notification_count: value,
      formId: array.find(form => form.form_title === key).id
    });
  });

  return grouped;
};
