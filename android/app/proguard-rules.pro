# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}
#-optimizationpasses 5
#-dontusemixedcaseclassnames
#-dontskipnonpubliclibraryclasses
#-dontskipnonpubliclibraryclassmembers
#-dontpreverify
#-verbose
#-dump class_files.txt
#-printseeds seeds.txt
#-printusage unused.txt
#-printmapping mapping.txt
#-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
#
#-allowaccessmodification
#-keepattributes *Annotation*
#-renamesourcefileattribute SourceFile
#-keepattributes SourceFile,LineNumberTable
#-repackageclasses ''

#-keep public class * extends android.app.Activity
#-keep public class * extends android.app.Application
#-keep public class * extends android.app.Service
#-keep public class * extends android.content.BroadcastReceiver
#-keep public class * extends android.content.ContentProvider
#-keep public class * extends android.app.backup.BackupAgentHelper
#-keep public class * extends android.preference.Preference
#-keep public class com.android.vending.licensing.ILicensingService
#-dontnote com.android.vending.licensing.ILicensingService

# Explicitly preserve all serialization members. The Serializable interface
# is only a marker interface, so it wouldn't save them.
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# Preserve all native method names and the names of their classes.
#-keepclasseswithmembernames class * {
#    native <methods>;
#}
#
#-keepclasseswithmembernames class * {
#    public <init>(android.content.Context, android.util.AttributeSet);
#}
#
#-keepclasseswithmembernames class * {
#    public <init>(android.content.Context, android.util.AttributeSet, int);
#}

# Preserve static fields of inner classes of R classes that might be accessed
# through introspection.
#-keepclassmembers class **.R$* {
#  public static <fields>;
#}

# Preserve the special static methods that are required in all enumeration classes.
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keep public class * {
    public protected *;
}

-keep class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}
##---------------End: proguard configuration common for all Android apps ----------

#---------------Begin: proguard configuration for support library  ----------
#-keep class android.support.v4.app.** { *; }
#-keep interface android.support.v4.app.** { *; }
#-keep class com.actionbarsherlock.** { *; }
#-keep interface com.actionbarsherlock.** { *; }

# The support library contains references to newer platform versions.
# Don't warn about those in case this app is linking against an older
# platform version. We know about them, and they are safe.
#-dontwarn android.support.**
#-dontwarn com.google.ads.**
##---------------End: proguard configuration for Gson  ----------

##---------------Begin: proguard configuration for Gson  ----------
# Gson uses generic type information stored in a class file when working with fields. Proguard
# removes such information by default, so configure it to keep all of it.
-keepattributes Signature

# For using GSON @Expose annotation
-keepattributes *Annotation*

# Gson specific classes
#-keep class sun.misc.Unsafe { *; }
#-keep class com.google.gson.stream.** { *; }

# Application classes that will be serialized/deserialized over Gson
-keep class com.example.model.** { *; }

##---------------End: proguard configuration for Gson  ----------

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
-keepclassmembers class fqcn.of.javascript.interface.for.webview {
   public *;
}

# For Google Play Services
#-keep public class com.google.android.gms.ads.**{
#   public *;
#}
#
## For old ads classes
#-keep public class com.google.ads.**{
#   public *;
#}
#
## For mediation
#-keepattributes *Annotation*
#
## Other required classes for Google Play Services
## Read more at http://developer.android.com/google/play-services/setup.html
#-keep class * extends java.util.ListResourceBundle {
#   protected Object[][] getContents();
#}
#
#-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
#   public static final *** NULL;
#}
#
#-keepnames @com.google.android.gms.common.annotation.KeepName class *
#-keepclassmembernames class * {
#   @com.google.android.gms.common.annotation.KeepName *;
#}
#
#-keepnames class * implements android.os.Parcelable {
#   public static final ** CREATOR;
#}
#
#-keep class com.google.android.gms.common.GooglePlayServicesUtil {*;}
#-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {*;}
#-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {*;}

-keep class com.google.android.gms.** { *; }
#-dontwarn com.google.android.gms.**
-keep class com.google.ads.** {*;}
