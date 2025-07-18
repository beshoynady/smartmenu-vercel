const mongoose = require("mongoose");

const { Schema } = mongoose;

const permissionsSchema = new Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    Permissions: [
      {
        resource: {
          type: String,
          enum: [
            "Employees",
            "Attendance",
            "Employee Transactions",
            "Payroll",
            "Cash Register",
            "Cash Movement",
            "stock Item",
            "stock Categories",
            "stock Movement",
            "store",
            "Orders",
            "Tables",
            "Table Reservations",
            "Restaurant Settings",
            "Permissions",
            "Delivery Zones",
            "Shifts",
            "Expenses",
            "Daily Expenses",
            "Menu Categories",
            "Products",
            "Recipes",
            "Production",
            "Stock Production Recipes",
            "Production Order",
            "Production Record",
            "Section Consumption",
            "Purchases",
            "Purchase Returns",
            "Supplier Data",
            "Supplier Transactions",
            "Users",
            "Messages",
          ],
          required: true,
        },
        create: { type: Boolean, default: false },
        update: { type: Boolean, default: false },
        read: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  { timestamps: true }
);

const PermissionsModel = mongoose.model("Permissions", permissionsSchema);

module.exports = PermissionsModel;
